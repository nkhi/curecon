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
  SectionRow
} from './popupContentStyles'

const PopupContent = (activeSchool) => {
  const a = activeSchool.activeSchool
  
  return(
    <Container>
      <Location>
        <LocationIcon/>
        <LocationLabel>{a?.CITY}, {a?.COUNTRY} {a?.FIRST_CASE_IN_COUNTRY && `(First COVID case: ${a?.FIRST_CASE_IN_COUNTRY})`}</LocationLabel>
      </Location>
      <Section>
        <Link href={a?.SITE} target='_blank'>
          <NameLabel>{a.NAME}</NameLabel>
        </Link>
        <LeaveIcon />
      </Section>
      <SectionRow>
        <DataLabel>Final Exams & Evaluations: </DataLabel>
        <RowContent>{a?.FINAL_EXAMS}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>In-person Activities: </DataLabel>
        <RowContent>{a?.IN_PERSON_ACTIVITIES}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Gradutation: </DataLabel>
        <RowContent>{a?.GRADUATION}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Changes to Academic Policy: </DataLabel>
        <RowContent>{a?.INFO_POLICIES}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Other Academic Considerations: </DataLabel>
        <RowContent>{a?.OTHER_ACAD_CONSIDERATIONS}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Planned Action for Fall 2020 Semester: </DataLabel>
        <RowContent>{a?.NEXT_SEM_PLAN}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Courses Moved Online? </DataLabel>
        <RowContent>{a?.COURSES_MOVED_ONLINE}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Residence Buildings Closed?</DataLabel>
        <RowContent>{a?.RES_CLOSED}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Date Residence Buildings Closed: </DataLabel>
        <RowContent>{a?.NEXT_SEM_PLAN}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Student Mental Health Resources available?</DataLabel>
        <RowContent>{a?.MENTAL_HEALTH_RESOURCES}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Detailed Mental Health Resource Allowances:</DataLabel>
        <RowContent>{a?.DETAILS_MENTAL_HEALTH_RESOURCES}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Financial Aid Offered?</DataLabel>
        <RowContent>{a?.FIN_AID_OFFERED}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Types of Financial Aid Offered:</DataLabel>
        <RowContent>{a?.TYPES_FIN_AID_OFFERED}</RowContent>
      </SectionRow>
      <SectionRow>
        <DataLabel>Other Information: </DataLabel>
        <RowContent>{a?.OTHER}</RowContent>
      </SectionRow>
    </Container>
  )
}

export default PopupContent
