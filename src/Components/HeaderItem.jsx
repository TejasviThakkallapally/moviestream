import React from "react";

function HeaderItem({name, Icon}) {
  return( 
  <div className="text-white flex items-center gap-3
  text-[18px] font-normal cursor-pointer hover:underline underline-offset-8 mb-3">
    <Icon/>
    <div className="">{name}</div>
  </div>
  )
}
export default HeaderItem;
 