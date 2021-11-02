import { libraryList } from "../../settings/library-list"

export const Menu = ()=>{
  return (
    <select>
      {Object.keys(libraryList).map((k)=><option key={k} value={k}>{k}</option>)}
    </select>
  )
}