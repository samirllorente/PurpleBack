export interface Product {
    id: string,
    issuer: string,
    status?: string,
    type: string
}

export interface ProductData {
    due_date: string,
    issue_date: string,
    product: Product,
    summary: ProductSummary
}

export interface ProductSummary {
    amount?: number,
    balance?: number,
    category?: string,
    credit_line?: number,
    effective_monthly_rate?: number,
    franchise?: string,
    min_payment?: number,
    next_payment?: string,
    next_payment_amount?: number
    nominal_rate?: number,
    paid_installments?: number,
    profits?: number,
    term?: SummaryTerm,
    total_installments?: number
}

export interface SummaryTerm {
    count: number,
    units: string
}
