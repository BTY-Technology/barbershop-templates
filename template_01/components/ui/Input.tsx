import React, { InputHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="label">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={clsx(
            'input',
            error && 'input-error',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />

        {error && (
          <p id={`${inputId}-error`} className="error-message" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-sm text-gray-500 mt-1">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
