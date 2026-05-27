interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-[#062c15] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-gray-300 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
