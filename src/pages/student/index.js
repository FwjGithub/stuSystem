import React from 'react'
// import StudentPager from '../../components/containers/PagerContainer'
import StudentSearchBar from '../../components/containers/SearchBarContainer'
import StudentTabel from '../../components/containers/StudentTabelContainer'
import StudentModal from '../../components/containers/StudentModalContainer'
function index() {
    return (
        <>
                <StudentSearchBar />
                <StudentTabel />
                {/* <StudentPager /> */}
                <StudentModal />
        </>
    )
}
index.title = '学生管理页'
index.wrappers = ['@/wrappers/auth', '@/wrappers/HandleTitle']
export default index;