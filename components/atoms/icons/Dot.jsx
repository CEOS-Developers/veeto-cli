import React from 'react'

const SvgComponent = (props,{style}) => (
  <svg width={11} height={11} style={style}{...props}>
    <g data-name="\uADF8\uB8F9 253" transform="translate(-39 -723)">
      <g
        data-name="\uC0AC\uAC01\uD615 294"
        transform="translate(39 723)"
        stroke={props.color}
        fill="none"
      >
        <rect width={11} height={11} rx={5.5} stroke="none" />
        <rect width={10} height={10} x={0.5} y={0.5} rx={5} />
      </g>
      <rect
        width={7}
        height={7}
        data-name="\uC0AC\uAC01\uD615 295"
        rx={3.5}
        transform="translate(41 725)"
        fill={props.color}
      />
    </g>
  </svg>
)

export default SvgComponent
