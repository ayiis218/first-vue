export interface IPropsDataSection {
  companyName: string;
  position: string;
  date: string
  experience: IPropsExperience[]

}
export interface IPropsExperience {
  title: string
  project: IPropsProject[]
}

export interface IPropsProject {
  title: string
  list: string[]
}