import { useCallback, useState, useRef } from "react";

function useFormCustom({ defaultValues = {} } = {}) {
  const refs = useRef({});
  const [_values, _setValues] = useState(defaultValues);

  const registerCustom = useCallback(
    (name) => ({
      name,
      defaultValue: defaultValues[name],
      onChange: (e) => {
        _setValues((prev) => ({ ...prev, [name]: e.target.value }));
      },
      onBlur: () => {},
      ref: (el) => {
        if (el) {
          refs.current[name] = el;
        }
      },
    }),
    [defaultValues]
  );

  const handleSubmitCustom = useCallback(
    (callback) => {
      return (e) => {
        e.preventDefault();
        callback(_values);
      };
    },
    [_values]
  );

  const resetCustom = useCallback(() => {
    for (const key in refs.current) {
      if (refs.current[key]) {
        refs.current[key].value = defaultValues[key] ?? "";
      }
    }
    _setValues({ ...defaultValues });
  }, [defaultValues]);
const watchCustom = useCallback((name) => {
    if(name) return _values[name]
    return _values
}, [_values])
  return { registerCustom, handleSubmitCustom, resetCustom, watchCustom };
}

export default useFormCustom;
