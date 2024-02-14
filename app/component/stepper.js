const Step = ({ number, title }) => (
    <div className="flex items-center space-x-4">
        {steps.map((label, index) => (
            <div key={index} className="flex items-center space-x-2">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${index === 1 ? 'bg-green-200' : 'bg-gray-200'} dark:${index === 1 ? 'bg-green-900' : 'bg-gray-700'}`}>
                    <span className="font-medium">{index + 1}</span>
                </div>
                <h3 className="font-medium leading-tight">{label}</h3>
                {index !== steps.length - 1 && <div className="border border-gray-300 h-0 flex-grow"></div>}
            </div>
        ))}
    </div>
);

export default Step