import './ExtraFeature.css';

interface ExtraFeatureProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export default function ExtraFeature( {label, value, onChange } : ExtraFeatureProps)  {

  return(
    <div className='container-feature'>
      <p className="feature-label">Number of {label}</p>
      <div className="feature-counter">
        <button
        type="button"
        aria-label={`Decrease number of ${label}`}
        onClick={()=> onChange(value - 1)} 
        disabled= {value <= 1}
        >
          -
        </button>
        <span>{value}</span>
        <button
          type="button"
          aria-label={`Increase number of ${label}`}
          onClick={()=> onChange(value + 1)}
        >
          +
        </button>
      </div>
      
    </div>
  )
}