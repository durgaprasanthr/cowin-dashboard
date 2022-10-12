// Write your code here
import './index.css'
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div className="chart-container">
      <h1 className="chart-heading">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie data={vaccinationByAge} dataKey="count" nameKey="age" label>
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
