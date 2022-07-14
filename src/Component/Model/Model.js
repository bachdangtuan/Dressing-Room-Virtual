import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import classes from './style.module.css'

export default function Model() {

    const model = {
        contain: "images/background/background_998.jpg",
        body: "images/allbody/bodynew.png",
        bikinitop: "images/allbody/bikini_branew.png",
        bikinibottom: 'images/allbody/bikini_pantsnew.png',
        model:'images/model/1000new.png',
        feetleft:"images/allbody/feet_high_leftnew.png",
        feetright:"images/allbody/feet_high_rightnew.png",
        background:''
    }


    
    const [first, setfirst] = useState(model)
    
    const arrModel = useSelector(state => state.modelReducer)
    
    return (
        <div className={classes.contain} style={{
            background:`url(${first.contain})`
        }} >
            <div className={classes.body} style={{ background:`url(${first.body})` }} />
            <div className={classes.model} style={{ background:`url(${first.model})` }}/>
            <div className={classes.bikinitop} style={{ background:`url(${first.bikinitop})` }}/>
            <div className={classes.bikinibottom} style={{ background:`url(${first.bikinibottom})` }}/>
            <div className={classes.feetleft} style={{ background:`url(${first.feetleft})` }} />
            <div className={classes.feetright} style={{ background:`url(${first.feetright})` }}/>

            <div className={classes.bikinitop} style={{ backgroundImage:`url(${arrModel.topclothes})`, backgroundSize:'cover' }}/>
            <div className={classes.bikinibottom} style={{ backgroundImage:`url(${arrModel.botclothes})`, backgroundSize:'cover' }}/>
            <div className={classes.handbag} style={{ backgroundImage:`url(${arrModel.handbags})`, backgroundSize:'cover' }}/>
            <div className={classes.hairstyle} style={{ backgroundImage:`url(${arrModel.hairstyle})`, backgroundSize:'cover' }}/>
            <div className={classes.necklace} style={{ backgroundImage:`url(${arrModel.necklaces})`, backgroundSize:'cover' }}/>
        </div>
    )
}
