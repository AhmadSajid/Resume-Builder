import React, { useEffect, useState } from 'react'
import styles from './Body.module.css'
import {ArrowDown} from 'react-feather'
import Editor from '../Editor/Editor';

function Body() {
    const colors=['#239ce2','#48bb78','#0bc5ea','#a0aec0','#ed8936'];
const sections={
  basicInfo:'Personal Information',
  workExp:'Work Experience',
  project:'Projects',
  education:'Education',
  achievements:'Achievements',
  summary:'Summary',
  other:'Other',
};

const [resumeInformation, setResumeInformation]=useState({
  [sections.basicInfo]:{
    id: sections.basicInfo,
    sectionTitle: sections.basicInfo,
    detail: {},
  },
  [sections.workExp]:{
    id: sections.workExp,
    sectionTitle: sections.workExp,
    detail: [],
  },
  [sections.project]:{
    id: sections.project,
    sectionTitle: sections.project,
    detail: [],
  },
  [sections.education]:{
    id: sections.education,
    sectionTitle: sections.education,
    detail: [],
  },
  [sections.achievements]:{
    id: sections.achievements,
    sectionTitle: sections.achievements,
    detail: [],
  },
  [sections.summary]:{
    id: sections.summary,
    sectionTitle: sections.summary,
    detail: '',
  },
  [sections.other]:{
    id: sections.other,
    sectionTitle: sections.other,
    detail: '',
  }
})

useEffect(()=>{
  console.log(resumeInformation);
},[resumeInformation]);

  return (
  <div className={styles.container}>
    <p className={styles.heading}>Resume Builder</p>
    <div className={styles.toolbar}>
        <div className={styles.colors}>
            {colors.map((item)=>(
                <span key={item} style={{backgroundColor: item}} 
                className={styles.color}/>
            ))}
        </div>
        <button>Download <ArrowDown/></button>
    </div>
    <div className={styles.main}>
      <Editor 
      sections={sections} information={resumeInformation}
      setInformation={setResumeInformation}
      />
    </div>
  </div>
  );
}

export default Body;