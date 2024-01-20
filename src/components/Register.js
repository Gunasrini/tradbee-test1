import { Col, Form, FormGroup, Input, Row, Label, Button } from 'reactstrap'

function Register() {
    return (
        <>
            <Col lg={5} className='mt-5 mx-auto pt-4'>
                <div className='text-center mb-4 pb-2'>
                    <h2 className='register-cont'><span className='text-primary'>You'll never worry</span> <br /> about money again</h2>
                </div>
                <Form className='form'>
                    <FormGroup className='mb-4'>
                        <Input type='text' placeholder='Full Name' />
                    </FormGroup>
                    <FormGroup className='mb-4'>
                        <Input type='text' placeholder='Mobile Number' />
                    </FormGroup>
                    <FormGroup className='mb-4'>
                        <Input type='email' placeholder='Official Email ID' />
                    </FormGroup>
                    <FormGroup className='mb-4'>
                        <Input type='text' placeholder='Company Name' />
                    </FormGroup>
                    <div className='text-center'>
                        <Button type="submit" color="primary">Create Account</Button>
                    </div>
                </Form>
            </Col>
        </>
    )
}

export default Register