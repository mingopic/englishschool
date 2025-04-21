import { GroupTask } from "./groupTask"
import { PieData } from "./pieData"

export interface Project {
    groupProjectId: number
    percentExpected: number
    percentCompleted: number
    percentDeviation: number
    projectName: string
    projectId: number
    assignedPersonName: string
    assignedPersonId: number
    groupProjectName: string
    startDate: Date
    endDate: Date
    pieData: PieData
    detail: GroupTask[]
}