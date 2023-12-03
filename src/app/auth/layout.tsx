import React from 'react'

type Props = {
  children: React.ReactNode;
}

const layout = (props: Props) => {
  const {children} = props;
  return (
    <div style={{background: 'red'}}>{children}</div>
  )
}

export default layout;