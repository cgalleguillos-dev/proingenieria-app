import React from 'react';
import {Hour} from "@/config/interfaces";
import {Select, SelectItem} from "@nextui-org/select";

interface Props {
    defaultSelectedKey?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    optionsHour: Hour[];
    value?: string;
    selectedKey?: string;
}

export const ExecutorSelect: React.FC<Props> = ({defaultSelectedKey, onChange, optionsHour, value, selectedKey
}) => {
  return (
    <Select
      size="sm"
      items={optionsHour.map((hour, index) => ({
          key: hour.id,
          data: hour.hour
      }))}
      variant="bordered"
      className="w-full"
      placeholder="Hora"
      defaultSelectedKeys={[defaultSelectedKey!]}
      value={value}
      selectedKeys={[selectedKey!]}
      onChange={onChange}
    >
        {(hour) => (<SelectItem key={hour.key} value={hour.key}>{hour.data}</SelectItem>)}
    </Select>
  );
};
