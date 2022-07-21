type StringifiedObject<T extends Object> = {
  [Key in keyof T]: string
};

const stringifyProperties = <Type extends Object>(obj: Type): StringifiedObject<Type> => {
  const keyValueArray = Object.entries(obj) as [keyof Type, any][];

  return keyValueArray.reduce<Partial<StringifiedObject<Type>>>((prevObj, [key, value]) => ({
    ...prevObj,
    [key]: String(value),
  }), {}) as StringifiedObject<Type>;
};

export default stringifyProperties;
