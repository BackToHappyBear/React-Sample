import React from 'react'

export class JSXAdvantage extends React.Component {
  state = {
    tagNum: [1, 2, 3, 4, 5],
  }

  render() {
    return (
      <>
        {this.state.tagNum.map(v => {
          const TagName = 'h' + v
          return <TagName key={v}>render {TagName}</TagName>
        })}
      </>
    )
  }
}
