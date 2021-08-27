import { FC, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAction } from "../../State/Actions/useAction";
import { Diary } from "../../State/DataTypes/diary";
import { useAppSelector } from "../../State/hook";

export const AddDiary: FC = () => {
    const [isPrivate, setIsPrivate] = useState<boolean>(false)
    const user = useAppSelector(state => state.LoginReducer);
    const { AddDiaryAction } = useAction();

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const diary:Diary = {
            title : e.target.title.value,
            desc : e.target.desc.value,
            createdAt : Date.now(),
            access : isPrivate ? "private" : "public",
            userId : user.items?.id,
            entryIds : []
        }

        console.log("Diary Data : ", diary)
        AddDiaryAction({diary});
        
        e.target.title.value = null;
        e.target.desc.value = null
    }
    return <Row style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
        <Col sm={10} md={8} lg={6} className="card p-5    shadow" >
            <Form onSubmit={(e) => handleSubmit(e)} >
                <Row className="text-center" ><h3> New Diary </h3></Row>
                <Form.Control className="mt-3" type="text" placeholder="Title" name="title" required />
                <Form.Control className="mt-3" type="text" placeholder="Description" name="desc" as="textarea" rows={2} required />
                <Form.Check
                    className="mt-3"
                    type="switch"
                    id="custom-switch"
                    label="Private"
                    onChange={() => setIsPrivate(!isPrivate)}
                    checked={isPrivate}
                />
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
