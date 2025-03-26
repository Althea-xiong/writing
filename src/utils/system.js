const SYSTEM_INFO = uni.getWindowInfo()
const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 10
const getTitleBarHeight=()=>{
    if(uni.getMenuButtonBoundingClientRect){
       let {top,height} = uni.getMenuButtonBoundingClientRect()
       return (top-getStatusBarHeight())*2+height
    }else{
        return 40
    }

}
const getNavBarHeight=()=> getStatusBarHeight()+getTitleBarHeight()
export {
    getStatusBarHeight,
    getTitleBarHeight,
    getNavBarHeight,
   
}