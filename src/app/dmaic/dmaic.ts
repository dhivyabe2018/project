import { User } from '../shared/model/user.model';

export interface Dmaic{
    userId: string,
    define: string,
    measure: {current: number, target: number},
    analyse: string,
    implementation: string,
    control: string
}