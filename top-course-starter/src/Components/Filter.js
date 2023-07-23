import React from 'react';
const Filter = ({ filterData }) => {
    return (
        <div>
            {filterData?.map((data) => {
                return (
                    <div>
                        <button>
                            {data.title}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Filter