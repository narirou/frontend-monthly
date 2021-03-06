import React from "react"
import styled from "@emotion/styled"

import { Member } from "./Member"

const Component = ({ members, guest, className }) => {
  return (
    <>
      <h2>チーム紹介</h2>
      <div className={`${className} members`}>
        {members.map((member) => <Member key={member.name} member={member} />)}
      </div>
      {guest && guest.length && (
        <>
          <h2>ゲスト</h2>
          <div className={`${className} members`}>
            {guest.map((guest) => <Member key={guest.name} member={guest} />)}
          </div>
        </>
      )}
    </>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;	
`

export const TeamMembers = StyledComponent
