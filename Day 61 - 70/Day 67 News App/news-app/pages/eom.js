import styles from "../styles/EOM.module.css"
import { Toolbar } from "../Components/Toolbar"
const EOM = (props) => {
    const { employee } = props
    console.log(employee)

    return(
        <div className="page-container">
            <Toolbar />
            <div className={styles.center}>
            <h1>Employee of the month</h1>
            <div className={styles.employeeOfTheMonth}>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
                <img src={employee.image} />
                <p>{employee.description}</p>
            </div>
            </div>
        </div>
    )
}

const getServerSideProps = async pageContext => {
    const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth');
    const employee = await apiResponse.json()

    return {
        props: {
            employee: employee
        },
    }
}

export {getServerSideProps}

export default EOM