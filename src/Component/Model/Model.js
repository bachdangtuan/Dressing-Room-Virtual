import React, { useState } from 'react'
import classes from './style.module.css'

export default function Model() {

    const model = {
        body: "images/allbody/bodynew.png",
        bikinitop: "images/allbody/bikini_branew.png",
        bikinibottom: 'images/allbody/bikini_pantsnew.png',
        model:'images/model/1000new.png',
        feetleft:"images/allbody/feet_high_leftnew.png",
        feetright:"images/allbody/feet_high_rightnew.png",
    }



    const [first, setfirst] = useState(model)



    return (
        <div className={classes.contain} >
            <div className={classes.body} style={{ background:`url(${model.body})` }} />
            <div className={classes.model} style={{ background:`url(${model.model})` }}/>
            <div className={classes.bikinitop} style={{ background:`url(${model.bikinitop})` }}/>
            <div className={classes.bikinibottom} style={{ background:`url(${model.bikinibottom})` }}/>
            <div className={classes.feetleft} style={{ background:`url(${model.feetleft})` }} />
            <div className={classes.feetright} style={{ background:`url(${model.feetright})` }}/>
        </div>
    )
}
