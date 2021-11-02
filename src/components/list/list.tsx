import { Fragment } from "react"
import { libraryList } from "../../settings/library-list"

export const List = ()=>{
  return (
    <dl>
      {Object.keys(libraryList).map((k)=>(
        <Fragment key={k}>
          <dt>{k}</dt>
          <dd>{libraryList[k as keyof typeof libraryList]}</dd>
        </Fragment>
      ))}
    </dl>
  )
}