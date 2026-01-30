import getMarkDownData from '@/utils/GetMarkDownData'
import ServicesCard from './ServicesCard'

export interface servicesType {
  content: string
  slug: string
  [key: string]: any
}

const servicesData: servicesType[] = getMarkDownData('data/services')

const Services = () => {
  return <ServicesCard servicesData={servicesData} />
}

export default Services
