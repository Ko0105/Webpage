export type TEIS_Data = {
  id: "EIS curve";
  color: `hsl${number}, ${number}%, ${number}%)`;
  data: { x: string; y: string }[];
};

export type TISC_Data = {
  id: "Normal" | "ISC case1" | "ISC case2";
  color: `hsl${number}, ${number}%, ${number}%)`;
  data: { x: string; y: string }[];
};

export type TOCV_Data = {
  id: "Model Voltage" | "Measured Voltage";
  color: `hsl${number}, ${number}%, ${number}%)`;
  data: { x: string; y: string }[];
};
