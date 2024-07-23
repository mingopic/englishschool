import { DoughnutData } from "./doughnutData"
import { Project } from "./project"

export interface GroupProject {
    percentCompleted: number
    percentDeviation: number
    detail: Project[]
    groupProjectId: number
    assignedPersonId: number
    groupProjectName: string
    startDate: string
    endDate: string
    doughnutData: DoughnutData
}