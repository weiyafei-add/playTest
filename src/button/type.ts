import { CSSProperties } from 'react';

export interface CustomButtonProps {
    className   ?:  string
    style       ?:  CSSProperties
    type        ?:  'primary' | 'warning' | 'danger' | 'default'
    disabled    ?:  Boolean
    ghost       ?:  Boolean
    size        ?:  'large' | 'middle' | 'small'
    onClick     ?:  Function
    loading     ?:  Boolean
    radius      ?:  Boolean
    icon        ?:  string | null
    dotted      ?:  Boolean

}