defmodule Soroban.Client do
  use Soroban.Web, :model
  import Ecto.Query

  schema "clients" do
    field :name, :string
    field :contact, :string
    field :address, :string
    field :email, :string

    has_many :jobs, Soroban.Job

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :contact, :address, :email])
    |> cast_assoc(:jobs)
    |> validate_required([:name, :contact, :address])
  end

  #def list(query) do
  #  from p in query,
  #  order_by: :name
  #end
end
