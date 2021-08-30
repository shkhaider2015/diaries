import { FC, useEffect, useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAction } from "../../State/Actions/useAction";
import { Entry } from "../../State/DataTypes/entry";
import { useAppSelector } from "../../State/hook";

export const UpdateEntry: FC = () => {
    const { diaryId, entryId } = useParams();
    const entries = useAppSelector(state => state.EntryReducer);
    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const { UpdateEntryAction } = useAction();

    const handleSubmit = (e: any) => {
        e.preventDefault()

        // let mTitle: string = e.target.title.value;
        // let mDesc: string = e.target.desc.value;
        let cTitle: string = "", cDesc: string = "";


        entries.items?.map(item => {
            if (item.id === entryId) {
                cTitle = item.title;
                cDesc = item.desc;
            }
        })


        if (title.length && desc.length) {
            console.log(12)
            if (cTitle === title && cDesc === desc) {
                console.log(`mT : ${cTitle} t : ${title} `, 13)
                return
            }
            else {
                console.log(14)
                let req = {
                    diaryId,
                    entryId,
                    title,
                    desc,
                    updatedAt: Date.now()
                }

                UpdateEntryAction({ req })
                setTitle("")
                setDesc("")
            }
        }
        else {
            console.log(15)
            return
        }

    }

    useEffect(
        () => {
            if (entries) {
                entries.items?.map(
                    (item: Entry) => {
                        if (item.id === entryId) {
                            setTitle(item.title)
                            setDesc(item.desc)
                        }
                    }
                )
            }
        }, [entryId]
    )

    return <Row style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
        <Col sm={10} md={8} lg={6} className="card p-5    shadow" >
            <Form onSubmit={(e) => handleSubmit(e)} >
                <Row className="text-center" ><h3> Update Entry </h3></Row>
                <Form.Control className="mt-3" type="text" placeholder="Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <Form.Control className="mt-3" type="text" placeholder="Description" name="desc" as="textarea" rows={2} value={desc} onChange={(e) => setDesc(e.target.value)} required />

                <div className="text-center" >
                    <Button
                        className="mt-3 w-50"
                        variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </Col>
    </Row>
}