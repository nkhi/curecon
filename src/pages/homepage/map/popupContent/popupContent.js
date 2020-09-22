import React from 'react'

//styles
import { 
  Container,
  Location,
  LocationLabel,
  LocationIcon,
  NameLabel,
  Link,
  LeaveIcon,
  Section,
  DataLabel,
  RowContent,
  SectionRow,
  SeeMoreButton
} from './popupContentStyles'

const PopupContent = (activeSchool) => {
  const a = activeSchool.activeSchool
  
  return(
    <Container>
      <Location>
        <LocationIcon/>
        <LocationLabel>{a?.CITY ? `${a?.CITY},` : ''} {a?.COUNTRY} {a?.FIRST_CASE_IN_COUNTRY && `(First COVID case: ${a?.FIRST_CASE_IN_COUNTRY})`}</LocationLabel>
      </Location>
      <Section>
        { a?.SITE !=='' 
        ? <Link href={a?.SITE} target='_blank'>
            <NameLabel>{a.NAME}</NameLabel>
          </Link> 
        : <NameLabel>{a.NAME}</NameLabel> }
        { a?.SITE && <LeaveIcon />}
      </Section>
      { a?.FINAL_EXAMS !== '' && <SectionRow>
        <DataLabel>Final Exams & Evaluations: </DataLabel>
        <RowContent>{a?.FINAL_EXAMS}</RowContent>
      </SectionRow>}
      { a?.IN_PERSON_ACTIVITIES !== '' && <SectionRow>
        <DataLabel>In-person Activities: </DataLabel>
        <RowContent>{a?.IN_PERSON_ACTIVITIES}</RowContent>
      </SectionRow>}
      { a?.GRADUATION !== '' && <SectionRow>
        <DataLabel>Gradutation: </DataLabel>
        <RowContent>{a?.GRADUATION}</RowContent>
      </SectionRow>}
      { a?.INFO_POLICIES !== '' && <SectionRow>
        <DataLabel>Changes to Academic Policy: </DataLabel>
        <RowContent>{a?.INFO_POLICIES}</RowContent>
      </SectionRow>}
      { a?.OTHER_ACAD_CONSIDERATIONS !== '' && <SectionRow>
        <DataLabel>Other Academic Considerations: </DataLabel>
        <RowContent>{a?.OTHER_ACAD_CONSIDERATIONS}</RowContent>
      </SectionRow>}
      { a?.NEXT_SEM_PLAN !== '' && <SectionRow>
        <DataLabel>Planned Action for Fall 2020 Semester: </DataLabel>
        <RowContent>{a?.NEXT_SEM_PLAN}</RowContent>
      </SectionRow>}
      { a?.COURSES_MOVED_ONLINE !== '' && <SectionRow>
        <DataLabel>Courses Moved Online? </DataLabel>
        <RowContent>{a?.COURSES_MOVED_ONLINE}</RowContent>
      </SectionRow>}
      { a?.RESIDENCE !== '' && <SectionRow>
        <DataLabel>University has Residence Buildings: </DataLabel>
        <RowContent>{a?.RESIDENCE}</RowContent>
      </SectionRow>}
      { a?.RES_CLOSED !== '' && <SectionRow>
        <DataLabel>Residence Buildings Closed?</DataLabel>
        <RowContent>{a?.RES_CLOSED}</RowContent>
      </SectionRow>}
      { a?.DATE_RES_CLOSED !== '' && <SectionRow>
        <DataLabel>Date Residence Buildings Closed: </DataLabel>
        <RowContent>{a?.DATE_RES_CLOSED}</RowContent>
      </SectionRow>}
      { a?.MENTAL_HEALTH_RESOURCES !== '' && <SectionRow>
        <DataLabel>Student Mental Health Resources available?</DataLabel>
        <RowContent>{a?.MENTAL_HEALTH_RESOURCES}</RowContent>
      </SectionRow>}
      { a?.DETAILS_MENTAL_HEALTH_RESOURCES !== '' && <SectionRow>
        <DataLabel>Detailed Mental Health Resource Allowances:</DataLabel>
        <RowContent>{a?.DETAILS_MENTAL_HEALTH_RESOURCES}</RowContent>
      </SectionRow>}
      { a?.FIN_AID_OFFERED !== '' && <SectionRow>
        <DataLabel>Financial Aid Offered?</DataLabel>
        <RowContent>{a?.FIN_AID_OFFERED}</RowContent>
      </SectionRow>}
      { a?.TYPES_FIN_AID_OFFERED !== '' && <SectionRow>
        <DataLabel>Types of Financial Aid Offered:</DataLabel>
        <RowContent>{a?.TYPES_FIN_AID_OFFERED}</RowContent>
      </SectionRow>}
      { a?.OTHER !== '' && <SectionRow>
        <DataLabel>Other Information: </DataLabel>
        <RowContent>{a?.OTHER}</RowContent>
      </SectionRow>}
    </Container>
  )
}

export default PopupContent
