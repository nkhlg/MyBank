import './Loan.css'


function Loan() {
    return (
        <div className='loan'>
            <div className="container">
               
                <div className="loansDiv">
                    <div>
                        <button type="submit" className="adminBtn">Personal loan</button>
                    </div>
                    <div>
                        <button type="submit" className="adminBtn">Gold loan</button>
                    </div>
                    <div>
                        <button type="submit" className="adminBtn">Home loan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Loan;