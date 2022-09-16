import React from 'react';
import { useFormik } from 'formik';
import { Form, Button, Row, Col } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const today = new Date(); 


const BookingForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            originCity: '',
            startDate: '',
            endDate: '',
            deliveryAddress: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Form onSubmit={formik.handleSubmit} className="m-auto">
            <Row class="d-flex">
                <Col md="3">
                    <Form.Group className="mb-3" controlId="userOriginCity">
                        <Form.Control
                            id="originCity"
                            type="text"
                            placeholder="Enter Current City"
                            name="originCity"
                            onChange={formik.handleChange}
                            values={formik.values.originCity}
                        />
                    </Form.Group>
                </Col>

                <Col md="3">
                    <Form.Group className="mb-3" controlId="userDeliveryAddress">
                        <Form.Control
                            id="deliveryAddress"
                            type="text"
                            placeholder="Address"
                            name="deliveryAddress"
                            onChange={formik.handleChange}
                            values={formik.values.deliveryAddress}
                        />
                    </Form.Group>
                </Col>

                <Col md="3">
                    <Form.Group className="mb-3" controlId="userStartDate">
                        <Form.Control
                            id="startDate"
                            type="datetime-local"
                            placeholder="Enter Start Date"
                            name="startDate"
                            onChange={formik.handleChange}
                            values={formik.values.startDate}
                        />
                    </Form.Group>
                </Col>

                <Col md="3">
                    <Form.Group className="mb-3" controlId="endDate">
                        <Form.Control
                            id="endDate"
                            type="datetime-local"
                            placeholder="Enter Start Date"
                            name="endDate"
                            onChange={formik.handleChange}
                            values={formik.values.endDate}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className='align-item-center'>
                <Col md="4" className='m-auto'>
                <Button variant="primary" className='btn-lg' type="submit">
                Book Your Perfect Car
            </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default BookingForm;