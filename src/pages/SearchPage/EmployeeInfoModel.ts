export interface EmployeeInfoModel {
  gender: string;
  name: EmployeeName;
  email: string;
  picture: EmployeePicture;
}

interface EmployeeName {
  first: string;
  last: string;
}
interface EmployeePicture {
  large: string;
  medium: string;
  thumbnail: string;
}
