import React from 'react'
import FlightSearch from '../components/FlightSearch'
import FlightStatus from '../components/FlightStatus'
import FlightTable from '../components/FlightTable'

export default function Home() {
  return (
    <div className='bg-slate-600'>
      <FlightSearch></FlightSearch>
      <FlightStatus></FlightStatus>
      <FlightTable></FlightTable>
    </div>
  )
}
