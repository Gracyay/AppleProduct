import gsap from "gsap"

export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target,{
        ...animationProps, scrollTrigger:{
            trigger: target, 
            toggleActions: 'restart reverse restart reverse',
            //first render: restart animation, when we leave: reverse it, when 
            //we come back again: restart; when we leave again: reverse
            start: 'top 85%', 
            ...scrollProps,
        }
    })
}

export const animateWithGsapTimeLine = (timeline, rotationRef
    ,rotationState, firstTarget, secondTarget, animationProps) => {
     
        timeline.to(rotationRef.current.roation, {
            y: rotationState, duration: 1, ease: 'power2.inOut'
        })

        timeline.to(
            firstTarget,{
                ...animationProps, ease: 'power2.onOut'
            },
            '<'
        )

        timeline.to(
            secondTarget,{
                ...animationProps, ease: 'power2.onOut'
            },
            '<'
        )

}