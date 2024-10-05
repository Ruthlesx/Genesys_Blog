'use client'

const NavItem = (props) => {
  const { title, url } = props  

  return (
    <div>
      <li className={"navitem-list"}>
        <a href={url}> {title}</a>
      </li>
    </div>
  )
}

export default NavItem