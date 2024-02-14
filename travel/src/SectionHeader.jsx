import './SectionHeader.css'


function SectionHeader({title, first}){
    let class_r = ""
    if(first){
        class_r = "section_header_container first_section"
    }else{
        class_r ="section_header_container"
    }
    return(
        <div className={class_r}>
            <h2>{title}
            <div className='section_header_line'></div>
            </h2>
        </div>
    )
}

export default SectionHeader