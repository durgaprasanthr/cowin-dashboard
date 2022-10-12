// Write your code here
import './index.css'
import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div className="chart-container">
      <h1 className="chart-heading">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            innerRadius="30%"
            outerRadius="50%"
            startAngle={180}
            endAngle={0}
            data={vaccinationByGender}
            dataKey="count"
            nameKey="gender"
            wrapperStyle={{margin: 0}}
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#a3df9f" />
          </Pie>
          <Legend iconType="circle" wrapperStyle={{padding: 10}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
