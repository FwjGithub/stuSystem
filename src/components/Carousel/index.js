import React, { useRef } from 'react'
import { Carousel, Button } from 'antd'
export default function MyCarousel({ children, ...rest }) {
    const cRef = useRef()
    return (
        <>
            <Carousel ref={cRef} {...rest} prefixCls={false}>
                {children}
            </Carousel>
            <Button onClick={e => {
                cRef.current.prev()
            }}>上一张</Button>
            <Button onClick={e => {
                cRef.current.next()

            }}>下一张</Button>

        </>
    )
}
