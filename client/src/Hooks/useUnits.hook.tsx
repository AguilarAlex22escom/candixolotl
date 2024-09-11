import { useState } from "react";

const useUnits = () => {
    const [units, setUnits] = useState<number>(1);

    return {units, setUnits}
}

export default useUnits;