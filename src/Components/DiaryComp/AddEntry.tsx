import { FC } from "react";
import { Row, Col, Form,Button } from "react-bootstrap";
import { Entry } from "../../State/DataTypes/user";

export const AddEntry : FC = () =>
{
    const handleSubmit = (e:any) =>
    {
        e.preventDefault();
        const entry:Entry = {
            title : e.target.title.value,
            desc : e.target.desc.value,
            createdAt : Date.now(),
            diaryId : ''
        }

        console.log("Entry Data : ", entry);

    }

    return <Row style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
    <Col sm={10} md={8} lg={6} className="card p-5    shadow" >
        <Form onSubmit={(e) => handleSubmit(e)} >
            <Row className="text-center" ><h3> New Entry </h3></Row>
            <Form.Control className="mt-3" type="text" placeholder="Title" name="title" />
            <Form.Control className="mt-3" type="text" placeholder="Description" name="desc" as="textarea" rows={2} />
            
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