import {Request, Response} from 'express'

export const home = (req: Request, res: Response) => {
    res.send('ola')
    
}
export const dogs = (req: Request, res: Response) => {
    res.send('cachorro')
    
}
export const cats = (req: Request, res: Response) => {
    
}
export const fishes = (req: Request, res: Response) => {
    
}        