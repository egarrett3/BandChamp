class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :website, :location, :description, presence: false

  attr_reader :password
  after_initialize :ensure_session_token
  has_many :pictures, as: :imageable
  has_many :albums, 

  # validates :check_file_presence

  # def check_file_presence
  #   errors.add(:photo, "no file added") unless photo.attached?
  # end

  def self.find_by_credentials(username, password)
    if username.include?('@')
      user = User.find_by(email: username)
    else
      user = User.find_by(username: username)
    end
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

end
