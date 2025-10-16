import React, { SelectHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, '-')}`

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="label">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}

        <select
          ref={ref}
          id={selectId}
          className={clsx(
            'input',
            error && 'input-error',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <p id={`${selectId}-error`} className="error-message" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
