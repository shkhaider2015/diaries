import { FC, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const AddDiary: FC = () => {
    const [isPrivate, setIsPrivate] = useState<boolean>(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const title : string = e.target.title.value;
        const desc : string = e.target.desc.value;
        const createdAt = Date.now();

    }
    return <Row style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
        <Col sm={10} md={8} lg={6} className="card p-5    shadow" >
            <Form onSubmit={(e) => handleSubmit(e)} >
                <Row className="text-center" ><h3> New Diary </h3></Row>
                <Form.Control className="mt-3" type="text" placeholder="Title" name="title" />
                <Form.Control className="mt-3" type="text" placeholder="Description" name="desc" as="textarea" rows={2} />
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
