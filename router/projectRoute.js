import express from 'express'
import { postProject } from '../contoler/auth/projectControler.js'


const router=express.Router()

router.post('/postProject',postProject)



export default router