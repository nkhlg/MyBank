
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function GoldLoan(){
    
    return (
        <div className="main">
            <div className="leftDiv">

                <ul class="list-group list-group-flush border border-info rounded">
                    <li class="list-group-item">Get a loan up to ₹5000000</li>
                    <li class="list-group-item">Flexible Tenure from 12-60 months</li>
                    <li class="list-group-item">EMI starting at ₹2,187 per ₹1 lakh</li>
                    <li class="list-group-item">Rate of Interest* as low as 10.50% pa</li>

                </ul>

            </div>
            <div className="rightDiv">


                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Get the loan best suited for your needs

                        </Form.Label>
                        <Form.Control type="text" placeholder="How much loan do you require" />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>select a comfortable tenure</Form.Label>
                        <Form.Select >
                            <option>3 Months</option>
                            <option>6 Months</option>
                            <option>9 Months</option>


                        </Form.Select>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>




            </div>




        </div>
    )
}



export default GoldLoan;


