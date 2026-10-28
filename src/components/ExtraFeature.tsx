interface ExtraFeatureProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export default function ExtraFeature( {label, value, onChange } : ExtraFeatureProps)  {


  return(
    <>
    <p>Number of {label}</p>
    <button
      type="button"
      onClick={()=> onChange(value - 1)} 
      disabled= {value <= 1}
    >
      -
    </button>
    <span>{value}</span>
    <button
      type="button"
      onClick={()=> onChange(value + 1)}
    >
      +
    </button>
    
    </> 
  )
}