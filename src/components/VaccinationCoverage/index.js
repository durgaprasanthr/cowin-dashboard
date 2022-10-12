// Write your code here
import './index.css'

import {
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Bar,
} from 'recharts'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="chart-container">
      <h1 className="chart-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart width={1000} height={300} data={last7DaysVaccination}>
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{stroke: '#6c757d', strokeWidth: 1}}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar tick dataKey="dose1" name="Dose1" fill="#2d87bb" />
          <Bar dataKey="dose2" name="Dose2" fill="#f54394" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
